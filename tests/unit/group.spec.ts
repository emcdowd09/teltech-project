import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Group from '@/components/Group.vue'

describe('Group.vue', () => {
  it('renders list and title when passed', () => {
    const list = [{"department": "executive team","name": "Patrick","surname": "Falzon","image": "patrick","title": "General Manager","agency":"","intro": "Hello, I'm Patrick.","description": "As General Manager, my role is made easy by the rest of the amazing team here at Teltech, where our goal is to deliver forward-thinking and user-friendly mobile solutions that focus on security, practicality and innovation. In my free time, I enjoy travel, reading and long walks on the beach (with my dog, of course)."},{"department": "executive team","name": "Matt","surname": "Mizenko","image": "matt","title": "SVP of Operations","agency":"","intro": "Sup y’all? I’m Matt and I’m the SVP of Operations.","description": "At my heart, I am a sausage maker, which means that I do the really fun stuff like driving process and execution. Jealous, right? Nothing geeks me out more than starting with a few ideas on a whiteboard and eventually shipping a polished product. I’ve been in mobile since way before it was even a thing; in fact, I built one of the world’s first mobile commerce applications. Though I grew up in NJ (Rutgers Strong!) I currently live on a small farm outside of Seattle, WA with my family and am a diehard supporter of local club and 2019 MLS Champions Seattle Sounders FC."}]
    const title = 'Test List'
    const component = shallowMount(Group, {
      propsData: { list, title }
    })
    expect(component.text()).to.include(title)
    expect(list).to.be.an('array')
    expect(title).to.equal('Test List')
  })
})
