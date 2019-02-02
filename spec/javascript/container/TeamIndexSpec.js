import TeamIndex from '../../../app/javascript/react/components/TeamIndex'
import fetchMock from 'fetch-mock'

describe('Team Index Page', () => {
  let wrapper;
  let teams;

  beforeEach(() => {
    teams = [
      {id: 1, name: 'Soccer Team', city: "Modena", nickname: "Blue Team", badge: "Dragon"},
      {id: 2, name: 'Calcio', city: "Palermo", nickname: "Pink Team", badge: "Miccoli"},
      {id: 3, name: "Goal", city: "Venice", nickname: "Water City", badge: "Canals"}
    ]
    fetchMock.get('/api/v1/teams', {
      status: 200,
      body: teams
    });
    wrapper = mount(
      <TeamIndex />
    )
  })

  afterEach(fetchMock.restore)

  describe('index', () => {
    it('renders a list item for each item returned from the api call', (done) => {
      setTimeout(() => {
        expect(wrapper.find('h1').length).toEqual(teams.length)
        expect(wrapper.find('h1').at(0).text()).toEqual(teams[0].name)
        expect(wrapper.find('h1').at(1).text()).toEqual(teams[1].name)
        done()
      })
    })
  })
})
