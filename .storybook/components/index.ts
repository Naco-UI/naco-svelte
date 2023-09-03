import { ArgsTable as Props, PRIMARY_STORY } from '@storybook/addon-docs'
Props.defaultProps = { ...Props.defaultProps, story: PRIMARY_STORY }
export { Props }
export * from './Intro'
