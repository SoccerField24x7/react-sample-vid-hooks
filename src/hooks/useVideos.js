import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';
const KEY = 'AIzaSyDGWIMOkyQ8gFeBwLbPv0oPDOouApAy4dI';

const useVideos = (defaultSearchTerm) => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		search(defaultSearchTerm);
	}, [defaultSearchTerm]);

	const search = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
				part: "snippet",
				type: 'video',
				maxResults: 5,
				key: KEY
			}
		});

		setVideos(response.data.items);
		
	};

	return [ videos, search ];
};

export default useVideos;