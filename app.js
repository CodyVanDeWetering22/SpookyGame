const locations = [
    '🏤', '🏥', '🏭', '🏢', '🏣'
]

const people = [{
    name: 'Jimbo',
    picture: '🤵',
    location: '🏤'
},
{
    name: 'Sammy',
    picture: '🙆‍♀️',
    location: '🏤'
},
{
    name: 'Michael',
    picture: '👷',
    location: '🏤'
},
{
    name: 'Robert',
    picture: '👷',
    location: '🏥'
},
{
    name: 'Terry',
    picture: '🤴',
    location: '🏥',
},
{
    name: 'Bill',
    picture: '🕵️',
    location: '🏥',
},
{
    name: 'Marie',
    picture: '👩‍🍳',
    location: '🏭',
},
{
    name: 'Mykeal',
    picture: '💂',
    location: '🏭',
},
{
    name: 'Phil',
    picture: '🧜‍♂️',
    location: '🏭',
},
{
    name: 'Wilson',
    picture: '🏐',
    location: '🏢',
},
{
    name: 'Wendy',
    picture: '👩‍⚕️',
    location: '🏢',
},
{
    name: 'Jeremy',
    picture: '🦹',
    location: '🏢',
}
]

function drawPeople() {
    locations.forEach(location => {
        const peopleAtLocation = people.filter(person => person.location == location)
        console.log(peopleAtLocation)

        let stringofperson = ''

        peopleAtLocation.forEach(person => stringofperson += person.picture)

        console.log(location, stringofperson)

        const locationelement = document.getElementById(location)
        locationelement.innerText = stringofperson

    })
}
function AttackLocation() {



    changePeopleLocations()
}

function changePeopleLocations() {

    people.forEach(person => {

        const randomLocationIndex = Math.floor(Math.random() * locations.length)
        const randomLocation = locations[randomLocationIndex]
        person.location = randomLocation

    })



    drawPeople()
}

drawPeople()
