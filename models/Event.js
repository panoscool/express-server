const sampleData = {
  // all are required
  events: [
    {
      id: Number,
      title: String,
      date: String,
      category: String,
      description: String,
      city: String,
      venue: String,
      venueLatLng: {
        lat: Number,
        lng: Number
      },
      hostedBy: String,
      hostPhotoURL: String,
      attendees: [
        {
          id: Number,
          name: String,
          photoURL: String
        },
        {
          id: Number,
          name: String,
          photoURL: String
        }
      ]
    }
  ]
};

export default sampleData;
