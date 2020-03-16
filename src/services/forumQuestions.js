import {db} from '../firebase';
import uuid from 'react-uuid';

export function handleCreateLink(values, errors) {
    const { title, description } = values;
    if(errors.length !== 0) {
        const newLink = {
            title,
            description,
            votes: [
                {
                    user: 'unknown',
                    date: Date.now()
                }
            ],
            comments: [],
            created: Date.now(),
            id: uuid()
        };
        db.collection("forum").add(newLink)
    }
    
}

