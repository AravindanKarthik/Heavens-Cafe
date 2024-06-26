import {
  facebook,
  instagram,
  mail,
  phone,
  twitter,
  whatsapp,
} from '../assets/icons';

import {
  customer1,
  customer2,
} from '../assets/images';

import {
  bigFood1,
  bigFood2,
  bigFood3,
  thumbnailfood1,
  thumbnailfood2,
  thumbnailfood3,
} from '../assets/images/Home'; 

import { img1, img2, img3, img4, img5, img6, img7, img8,
 } from '../assets/images/Gallery';

import {cakes, order, vegans} from '../assets/images/Services';

export const navLinks = [
  { href: '#about-us', label: 'About Us' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact-us', label: 'Contact Us' },
];

export const food = [
  {
    thumbnail: thumbnailfood1,
    bigFood: bigFood1,
  },
  {
    thumbnail: thumbnailfood2,
    bigFood: bigFood2,
  },
  {
    thumbnail: thumbnailfood3,
    bigFood: bigFood3,
  },
];

export const statistics = [
  { value: '1', label: 'Shop' },
  { value: '2k+', label: 'Orders' },
  { value: '1k+', label: 'Customers' },
];

export const foods = [
  {
    imgURL: img1,
    name: 'Lemon Juice',
    price: '40.00',
    rating: 4.8,
  },
  {
    imgURL: img2,
    name: 'Bread Sandwich & Fries',
    price: '110.00',
    rating: 5,
  },
  {
    imgURL: img3,
    name: 'Mojito',
    price: '80.00',
    rating: 4.7,
  },
  {
    imgURL: img4,
    name: 'Tandoori Chicken',
    price: '130.20',
    rating: 4.7,
  },
  {
    imgURL: img5,
    name: 'Juice',
    price: '80.00',
    rating: 4.4,
  },
  {
    imgURL: img6,
    name: 'Burger & French Fries',
    price: '90.00',
    rating: 4.6,
  },
  {
    imgURL: img7,
    name: 'Ice Cream',
    price: '60.00',
    rating: 5,
  },
  {
    imgURL: img8,
    name: 'Cake',
    price: '130.00',
    rating: 4.9,
  },
];

export const services = [
  {
    imgURL: vegans,
    label: 'For Vegans',
    subtext: 'French fries, Drinks',
  },
  {
    imgURL: order,
    label: 'Order Online',
    subtext:
      'Mon - Fri : 11:00 – 23:00',
  },
  {
    imgURL: order,
    label: 'For Reservation',
    subtext:
      '+91 9965696907',
  },
  {
    imgURL: cakes,
    label: 'Dessert Special',
    subtext: 'Cakes',
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: 'Monish',
    rating: 5,
    feedback:
      'The taste and quality of the food exceeded my expectations. Highly recommended!',
  },
  {
    imgURL: customer2,
    customerName: 'Sonia',
    rating: 5,
    feedback:
      "The food not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: 'Quick Links',
    links: [
      { name: 'Home', link: '#home' },
      { name: 'About Us', link: '#about-us' },
      { name: 'Menu', link: '#menu' },
      { name: 'Gallery', link: '#gallery' },
    ],
  },
  {
    title: 'Help',
    links: [
      { name: 'FAQs', link: '/' },
      { name: 'How it works', link: '/' },
      { name: 'Privacy policy', link: '/' },
      { name: 'Terms & Conditions', link: '/' },
    ],
  },
];

export const contact = [
  {
    title: 'Get in touch',
    links: [
      {
        name: 'customer@heavensspot.com',
        link: 'mailto:customer@heavensspot.com',
        src: mail,
        alt: 'mail icon',
      },
      {
        name: '+91 9965696907',
        link: 'tel:+919965696907',
        src: phone,
        alt: 'phone icon',
      },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: 'facebook logo', link: 'https://www.facebook.com' },
  { src: twitter, alt: 'twitter logo', link: 'https://www.x.com' },
  { src: instagram, alt: 'instagram logo', link: 'https://www.instagram.com' },
  { src: whatsapp, alt: 'whatsapp logo', link: "https://api.whatsapp.com/send?phone=+9965696907&text=Hi, more information on Heaven's Cafe!" },
];

export const info = {
  title: "Heaven's",
  title2: "Heaven's Spot Restro",
  website: 'www.heavensspot.com',
};

export const copyrightYear = '2024';