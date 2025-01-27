const photo1 = {
  id: 1,
  location: {
    city: "Montreal",
    country: "Canada"
  },
  urls: {
    full: "/Image-1-Full.jpeg",
    regular: "/Image-1-Regular.jpeg"
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg"
  }
};

const photo2 = {
  id: 2,
  location: {
    city: "Toronto",
    country: "Canada"
  },
  urls: {
    full: "/Image-2-Full.jpeg",
    regular: "/Image-2-Regular.jpeg"
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg"
  }
};

const photo3 = {
  id: 3,
  location: {
    city: "Ottawa",
    country: "Canada"
  },
  urls: {
    full: "/Image-3-Full.jpeg",
    regular: "/Image-3-Regular.jpeg"
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg"
  }
};

const photo4 = {
  id: 4,
  location: {
    city: "Quebec",
    country: "Canada"
  },
  urls: {
    full: "/Image-4-Full.jpg",
    regular: "/Image-4-Regular.jpg"
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg"
  }
};

const photo5 = {
  id: 5,
  location: {
    city: "Vancouver",
    country: "Canada"
  },
  urls: {
    full: "/Image-5-Full.jpg",
    regular: "/Image-5-Regular.jpg"
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg"
  }
};

const photo6 = {
  id: 6,
  location: {
    city: "Montreal",
    country: "Canada"
  },
  urls: {
    full: "/Image-6-Full.jpg",
    regular: "/Image-6-Regular.jpg"
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg"
  }
};

const photo7 = {
  id: 7,
  location: {
    city: "Calgary",
    country: "Canada"
  },
  urls: {
    full: "/Image-7-Full.jpg",
    regular: "/Image-7-Regular.jpg"
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg"
  }
};

const photo8 = {
  id: 8,
  location: {
    city: "Ottawa",
    country: "Canada"
  },
  urls: {
    full: "/Image-8-Full.jpg",
    regular: "/Image-8-Regular.jpg"
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg"
  }
};

const photo9 = {
  id: 9,
  location: {
    city: "Nova Scotia",
    country: "Canada"
  },
  urls: {
    full: "/Image-9-Full.jpg",
    regular: "/Image-9-Regular.jpg"
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg"
  }
};

const photo10 = {
  id: 10,
  location: {
    city: "Edmonton",
    country: "Canada"
  },
  urls: {
    full: "/Image-10-Full.jpg",
    regular: "/Image-10-Regular.jpg"
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg"
  }
};

const photos = [
  {
    ...photo1,
    similar_photos: {
      photo2,
      photo3,
      photo4,
      photo5,
    }
  },
  {
    ...photo2,
    similar_photos: {
      photo2,
      photo3,
      photo4,
      photo5,
    }
  },
  {
    ...photo3,
    similar_photos: {
      photo2,
      photo3,
      photo4,
      photo5,
    }
  },
  {
    ...photo4,
    similar_photos: {
      photo2,
      photo3,
      photo4,
      photo5,
    }
  },
  {
    ...photo5,
    similar_photos: {
      photo2,
      photo3,
      photo4,
      photo5,
    }
  },
  {
    ...photo6,
    similar_photos: {
      photo2,
      photo3,
      photo4,
      photo5,
    }
  },
  {
    ...photo7,
    similar_photos: {
      photo2,
      photo3,
      photo4,
      photo5,
    }
  },
  {
    ...photo8,
    similar_photos: {
      photo2,
      photo3,
      photo4,
      photo5,
    }
  },
  {
    ...photo9,
    similar_photos: {
      photo2,
      photo3,
      photo4,
      photo5,
    }
  },
  {
    ...photo10,
    similar_photos: {
      photo2,
      photo3,
      photo4,
      photo5,
    }
  }
];

export default photos;
