import { shallowMount } from '@vue/test-utils'
import About from '@/views/About.vue'

describe('About.vue', () => {
  it('renders à verifier', () => {
    const msg = 'This is an about page'
    const wrapper = shallowMount(About)
    expect(wrapper.text()).toMatch(msg)
  })
  it('renders à verifier 2', () => {
    const msg = 'This is an about page'
    const wrapper = shallowMount(About)
    expect(wrapper.text()).toMatch(msg)
  })
})
