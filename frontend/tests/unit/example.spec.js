

import { mount} from '@vue/test-utils'
import WelcomePage from '../../views/WelcomePage.vue'

describe('WelcomePage.vue', () => {
  it('renders welcomePage', () => {
    const wrapper = mount(WelcomePage)

    const nav = wrapper.get('[data-test="nav"]')

    expect(nav.text()).toBe("Welcome Page")
  })
})
