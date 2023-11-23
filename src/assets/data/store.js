import { reactive } from 'vue';

export const store = reactive({
    socials: [
        'fa-facebook-f', 'fa-twitter', 'fa-pinterest-p'
    ],
    navbar: [
        {
            name: 'home',
            url: '#'
        },
        {
            name: 'about',
            url: '#'
        },
        {
            name: 'services',
            url: '#'
        },
        {
            name: 'showcase',
            url: '#'
        },
        {
            name: 'blog',
            url: '#'
        },
        {
            name: 'contact',
            url: '#'
        },
    ],
    quickLinks: [
        {
            name: 'Careers',
            url: '#'
        },
        {
            name: 'News',
            url: '#'
        },
        {
            name: 'Terms of use',
            url: '#'
        },
        {
            name: 'Privacy Projects',
            url: '#'
        },
        {
            name: 'About',
            url: '#'
        },
        {
            name: 'Contact',
            url: '#'
        },
    ],
    contacts: {
        address: 'Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX 76051',
        email: 'info@yourdomain.com',
        telNumber: '+99 (0) 101 0000 888',
        copyright: '© 2020 phlox business theme'
    },
    isLensClicked: false,
    jumbos: [
        {
            titleTop: 'We are a',
            titleBottom: 'Web Design ',
            greenWord: 'Agency',
            image: 'slide1.png'
        },
        {
            titleTop: 'A Group of',
            titleBottom: 'Expert ',
            greenWord: 'Planners',
            image: 'slide2.png'
        },
        {
            titleTop: 'Focus',
            titleBottom: 'on Your ',
            greenWord: 'Business',
            image: 'slide3.png'
        },
    ],
    carouselIndex: 0,
    optionCard: [
        {
            name: 'Speed Optimization',
            image: 'fa-gauge-high'
        },
        {
            name: 'Cloud Solutions',
            image: 'fa-cloud'
        },
        {
            name: 'Website Design',
            image: 'fa-tablet-screen-button'
        },
        {
            name: 'Online Marketing',
            image: 'fa-stopwatch'
        },
    ],
    designs: [
        {
            image: 'flowers.jpg',
            name: 'The Basket of Flowers',
            genre1: 'Branding',
            genre2: 'Marketing'
        },
        {
            image: 'wheel.jpg',
            name: 'A Famous Ferris Wheel',
            genre1: 'Marketing',
        },
        {
            image: 'shoes.jpg',
            name: 'Complementary Colors',
            genre1: 'Branding',
            genre2: 'Marketing'
        },
        {
            image: 'desk.jpg',
            name: 'Business Prestige',
            genre1: 'Branding',
        },
        {
            image: 'paper.jpg',
            name: 'Colorful Origami Boats',
            genre1: 'Branding',
            genre2: 'Marketing'
        },
        {
            image: 'sofa.jpg',
            name: 'Modern Couch',
            genre1: 'Marketing',
        },
        {
            image: 'baloons.jpg',
            name: 'Hot Air Baloons',
            genre1: 'Branding',
            genre2: 'Marketing'
        },
        {
            image: 'orange.jpg',
            name: 'Make Difference',
            genre1: 'Branding',
        },
    ],
    blogs: [
        {
            image: 'businesswoman.jpg',
            title: 'Marketing Ideas',
            date: 'May 24, 2018 by Alex'
        },
        {
            image: 'businessman.jpg',
            title: 'Rest During Working Hours',
            date: 'May 24, 2018 by Alex'
        },
        {
            image: 'room.jpg',
            title: 'Develop Your Startup Idea',
            date: 'May 24, 2018 by Alex'
        },
    ],
    brands: [
        {
            image: 'client1.png'
        },
        {
            image: 'client2.png'
        },
        {
            image: 'client3.png'
        },
        {
            image: 'client4.png'
        },
        {
            image: 'client5.png'
        },
        {
            image: 'client6.png'
        },
    ]
})
