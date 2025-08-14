import { createConfigForNuxt } from '@nuxt/eslint-config'

export default createConfigForNuxt({
  // 好みで
  features: {
    stylistic: false, // ← Prettierに任せるならfalse
  },
  rules: {
    'vue/multi-word-component-names': 'off',
  },
})