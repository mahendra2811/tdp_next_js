export const homeInfo = {
  hero: {
    title: "I'm Sharvan Patel",
    subtitle: 'Passionate about Nature, Culture and Heritage',
    backgroundImage: '/assets/Images/Home/Banner.jpg',
    primaryButtonText: 'About me',
    primaryButtonLink: '/about',
    secondaryButtonText: 'Book now',
    secondaryButtonLink: '/book-now',
  },

  about: {
    subtitle: 'About me',
    title: 'From Rural Roots to Photographic Pursuits',
    content:
      "A passionate photographer hailing from the remote village of Dhawa in the heart of Rajasthan. With an unwavering love for nature, culture, and heritage, Sharvan's lens captures the essence of rural Rajasthan in a way that transcends conventional boundaries. As a dedicated explorer, Sharvan has spent the last three years immersed in the artistry of the Thar region, weaving visual tales that showcase the beauty of the landscape and the richness of its cultural tapestry. Through his lens, he not only captures moments but also advocates for the conservation of wildlife and the preservation of Rajasthan's unique heritage. Join us on a visual odyssey as we delve into the world of Sharvan Patel's photography, where every image narrates a story of its own, embracing the spirit of Rajasthan with authenticity and passion.",
    buttonText: 'View more',
    buttonLink: '/about',
  },

  popularDestinations: {
    subtitle: 'Uncover place',
    title: 'Popular destination',
    description:
      "Uncover Hidden Gems: Sharvan's Lens Reveals the Beauty of Rajasthan's Best-Kept Secrets, from Ancient Forts to Enchanting Desert Landscapes.",
    destinations: [
      {
        id: 'dhawa-doli',
        location: 'Jodhpur',
        title: 'Dhawa-Doli wildlife Santuary',
        image: '/assets/Images/Home/PD-1.jpg',
        rating: 5,
        link: '/destination/dhawa-doli',
      },
      {
        id: 'desert-national-park',
        location: 'Jaisalmer',
        title: 'Desert National Park',
        image: '/assets/Images/Home/PD-2.jpg',
        rating: 4,
        link: '/destination/desert-national-park',
      },
      {
        id: 'mehrangarh-fort',
        location: 'Jodhpur',
        title: 'Mehrangarh fort',
        image: '/assets/Images/Home/PD-3.jpeg',
        rating: 4,
        link: '/destination',
      },
    ],
    buttonText: 'More destintion',
    buttonLink: '/destination',
  },

  packages: {
    subtitle: 'Popular Packeges',
    title: 'Checkout Our Packeges',
    packages: [
      {
        title: 'Dhawa-Doli wildlife Santuary',
        description:
          "Discover the pristine allure of Dhawa Doli Wildlife Sanctuary, where nature's symphony unfolds amidst breathtaking landscapes. Immerse yourself in the sanctuary's rich biodiversity, a testament to conservation efforts championed by Sharvan Patel.",
        image: '/assets/Images/Home/Packages-1.jpg',
        location: 'Jodhpur (Rajasthan)',
        duration: '1 Day',
        price: '₹ 6000',
        priceUnit: '/ per Safari',
        reviews: 21,
        rating: 5,
        link: '/destination/dhawa-doli',
        buttonText: 'Click here',
        buttonLink: '/book-now',
      },
    ],
    viewAllButtonText: 'View All Packages',
    viewAllButtonLink: '/destination',
  },

  facebookVideo: {
    videoUrl: 'https://fb.watch/qfuemHlh5n/',
  },

  gallery: {
    subtitle: 'Photo Gallery',
    title: "Captured Through Sarvan's Lens",
    description:
      "Explore the vibrant tapestry of Rajasthan's landscapes and culture in our Gallery, where every image is a moment captured through Sharvan's lens, unveiling the beauty and authenticity of the Thar Desert.",
    images: [
      { src: '/assets/Images/Home/gallery-1.JPG', alt: 'Gallery image 1' },
      { src: '/assets/Images/Home/gallery-2.jpg', alt: 'Gallery image 2' },
      { src: '/assets/Images/Home/gallery-3.JPG', alt: 'Gallery image 3' },
      { src: '/assets/Images/Home/gallery-4.jpg', alt: 'Gallery image 4' },
      { src: '/assets/Images/Home/gallery-5.jpg', alt: 'Gallery image 5' },
      { src: '/assets/Images/Home/gallery-6.JPG', alt: 'Gallery image 6' },
      { src: '/assets/Images/Home/gallery-7.JPG', alt: 'Gallery image 7' },
      { src: '/assets/Images/Home/gallery-8.JPG', alt: 'Gallery image 8' },
      { src: '/assets/Images/Home/gallery-9.JPG', alt: 'Gallery image 9' },
      { src: '/assets/Images/Home/gallery-10.JPG', alt: 'Gallery image 10' },
      { src: '/assets/Images/Home/gallery-11.JPG', alt: 'Gallery image 11' },
      { src: '/assets/Images/Home/gallery-12.JPG', alt: 'Gallery image 12' },
      { src: '/assets/Images/Home/gallery-13.JPG', alt: 'Gallery image 13' },
      { src: '/assets/Images/Home/gallery-14.JPG', alt: 'Gallery image 14' },
      { src: '/assets/Images/Home/gallery-15.JPG', alt: 'Gallery image 15' },
    ],
    buttonText: 'View All Photos',
    buttonLink: '/gallery',
  },

  photographerGallery: {
    subtitle: 'Photo Gallery',
    title: '',
    description:
      'Journey through the lens of Sharvan Patel: A Visual Chronicle of His Exploration in Every Frame.',
    images: [
      { src: '/assets/Images/Home/self-1.jpg', alt: 'Sharvan Patel 1' },
      { src: '/assets/Images/Home/self-2.jpg', alt: 'Sharvan Patel 2' },
      { src: '/assets/Images/Home/self-3.jpg', alt: 'Sharvan Patel 3' },
      { src: '/assets/Images/Home/self-4.JPG', alt: 'Sharvan Patel 4' },
      { src: '/assets/Images/Home/self-5.JPG', alt: 'Sharvan Patel 5' },
    ],
    buttonText: 'View all Photos',
    buttonLink: '/about',
  },

  youtubeSection: {
    title: 'Connect with Us on Youtube',
    embedId: 'dQw4w9WgXcQ', // Using a known working YouTube video ID as placeholder
  },

  callToAction: {
    subtitle: 'Call To Action',
    title: 'Ready For Unforgettable Travel. Remember Us!',
    description:
      'Prepared to Immerse in Unforgettable Thar Desert Exploration with Sharvan Patel. Let Your Journey Echo Our Warmth and Expertise Forever.',
    buttonText: 'Call Me !',
    phoneNumber: '+91 9929262986',
  },
};
