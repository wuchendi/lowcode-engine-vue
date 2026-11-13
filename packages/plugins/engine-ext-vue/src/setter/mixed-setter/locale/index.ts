import { editorCabin } from '../../../engine-cabin'
import en_US from './en-US.json'
import zh_CN from './zh-CN.json'

const { createIntl } = editorCabin

const { intl, intlNode, getLocale, setLocale } = createIntl({
  'en-US': en_US,
  'zh-CN': zh_CN,
})

export { getLocale, intl, intlNode, setLocale }
