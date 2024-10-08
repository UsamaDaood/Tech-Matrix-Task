import { FETCH_PLACES, MARK_AS_VISITED, UNMARK_AS_VISITED } from './actions';

interface Place {
  id: number;
  name: string;
  description: string;
  image: string;
  visited: boolean;
}

interface AppState {
  places: Place[];
}

const initialState: AppState = {
  places: [],
};

const placeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_PLACES:
      return {
        ...state,
        places: [
          {
      id: 1,
      name: 'Pyramids of Giza',
      description: 'The Pyramids of Giza are ancient pyramid structures located in Giza, Egypt. They are one of the Seven Wonders of the Ancient World.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcv38mgodkQ4uudLkH6Cl0sOCuTlW6y2ScVA&s', // Replace with actual URL
      visited: false,
    },
    {
      id: 2,
      name: 'Great Wall of China',
      description: 'The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, built along the northern borders of China.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEq3mcK95yRaquIGIoedisGl2xBL69lH47ag&s', // Replace with actual URL
      visited: false,
    },
    {
      id: 3,
      name: 'Machu Picchu',
      description: 'Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a mountain ridge.',
      imageUrl: 'https://example.com/machu_picchu.jpg', // Replace with actual URL
      visited: false,
    },
    {
      id: 4,
      name: 'Taj Mahal',
      description: 'The Taj Mahal is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMq0Utl9O-TUtLMs4xn6n1q0jyqAYN0YB3w&s', // Replace with actual URL
      visited: false,
    },
    {
      id: 5,
      name: 'Colosseum',
      description: 'The Colosseum is an oval amphitheater in the center of the city of Rome, Italy. It is the largest ancient amphitheater ever built.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg', // Replace with actual URL
      visited: false,
    },
    {
      id: 6,
      name: 'Petra',
      description: 'Petra is a historical and archaeological city in southern Jordan. It is famous for its rock-cut architecture and water conduit system.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnE5vPlMeAVohoA6QZx_LNI3YFjTKO31jjYA&s', // Replace with actual URL
      visited: false,
    },
    {
      id: 7,
      name: 'Statue of Liberty',
      description: 'The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor within New York City.',
      imageUrl: 'https://i.natgeofe.com/k/611a7aa1-57b3-4884-a2f6-2e0857c02257/united-states-statue-of-liberty-vertical.jpg?wp=1&w=1084.125&h=1517.25', // Replace with actual URL
      visited: false,
    },
    {
      id: 8,
      name: 'Eiffel Tower',
      description: 'The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is one of the most recognizable structures in the world.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGqWGMcklTjwDIR6tKZjJHE-9IQ30HuQ2ZKA&s', // Replace with actual URL
      visited: false,
    },
    {
      id: 9,
      name: 'Acropolis of Athens',
      description: 'The Acropolis of Athens is an ancient citadel located on a rocky outcrop above the city of Athens, containing the remains of several ancient buildings of great architectural and historical significance.',
      imageUrl: 'https://cdn.britannica.com/22/99622-159-68A77F6C/Parthenon-Athens.jpg', // Replace with actual URL
      visited: false,
    },
    {
      id: 10,
      name: 'Christ the Redeemer',
      description: 'Christ the Redeemer is a colossal statue of Jesus Christ in Rio de Janeiro, Brazil. It is considered one of the New Seven Wonders of the World.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhjSBm4bqWIzpnbF10bsLbrT_wG1W3Db_srw&s', // Replace with actual URL
      visited: false,
    }
        ],
      };
    case MARK_AS_VISITED:
      return {
        ...state,
        places: state.places.map(place =>
          place.id === action.payload ? { ...place, visited: true } : place
        ),
      };
    case UNMARK_AS_VISITED:
      return {
        ...state,
        places: state.places.map(place =>
          place.id === action.payload ? { ...place, visited: false } : place
        ),
      };
    default:
      return state;
  }
};

export default placeReducer;
