    
       import 'bootstrap/dist/css/bootstrap.min.css';


 //      import Filter from './Filtre';

   //    import Card from 'react-bootstrap/Card';


     const  MovieCard = ({ movie }) => {

        return (
            <div className="border rounded-lg p-4 shadow-md mb-4" style={{width:'300px' , borderRadius:'8px'}}>
              <img src={movie.posterURL} alt={movie.title} className="w-full h-64 object-cover rounded-md" style={{width: '250px',height:'250px'}} />
              <h2 className="text-xl font-bold mt-2">{movie.title}</h2>
              <p className="text-gray-700 mt-1">{movie.description}</p>
              <p className="mt-2">Note: <strong>{movie.note}/10</strong></p>
            </div>
          );

      


     }

     export default MovieCard