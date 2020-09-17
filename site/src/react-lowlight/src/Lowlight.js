'use strict'

var React = require('react')
var PropTypes = require('prop-types')
var low = require('lowlight/lib/core')
var mapChildren = require('./mapChildren')
var addMarkers = require('./addMarkers')
var h = React.createElement

var registeredLanguages = 0

function Lowlight (props) {
  if (process.env.NODE_ENV !== 'production') {
    if (!props.language && registeredLanguages === 0) {
      console.warn(
        'No language definitions seems to be registered, ' +
          'did you forget to call `Lowlight.registerLanguage`?'
      )
    }
  }

  var result = props.language
    ? low.highlight(props.language, props.value, {prefix: props.prefix})
    : low.highlightAuto(props.value, {prefix: props.prefix, subset: props.subset})

  var codeProps = result.language ? {className: 'hljs ' + result.language} : {className: 'hljs'}

  if (props.inline) {
    codeProps.style = {display: 'inline'}
    codeProps.className = props.className
  }

  var ast = result.value
  if (props.markers && props.markers.length > 0) {
    ast = addMarkers(ast, {prefix: props.prefix, markers: props.markers})
  }

  var value = ast.length === 0 ? props.value : ast.map(mapChildren.depth(0))

  var code = h('code', codeProps, value)
  return props.inline ? code : h('pre', {className: props.className}, code)
}

Lowlight.propTypes = {
  className: PropTypes.string,
  inline: PropTypes.bool,
  language: PropTypes.string,
  prefix: PropTypes.string,
  subset: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string.isRequired,
  markers: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
        line: PropTypes.number.isRequired,
        className: PropTypes.string
      })
    ])
  )
}

Lowlight.defaultProps = {
  className: 'lowlight',
  inline: false,
  prefix: 'hljs-'
}

Lowlight.registerLanguage = function () {
  registeredLanguages++
  low.registerLanguage.apply(low, arguments)
}

Lowlight.hasLanguage = function (lang) {
  return !!low.getLanguage(lang)
}

module.exports = Lowlight
