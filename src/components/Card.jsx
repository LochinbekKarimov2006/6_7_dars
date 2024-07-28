import React, { useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

function Card() {
    const [filter, setFilter] = useState('');
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [limit, setLimit] = useState(15);
    const [hasMore, setHasMore] = useState(true);
    
    useEffect(() => {
        fetch(`https://cars-pagination.onrender.com/products/${filter}`)
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [filter]);

    useEffect(() => {
        const newFilteredUsers = users.filter(user => user.id <= limit);
        setFilteredUsers(newFilteredUsers);
        setHasMore(newFilteredUsers.length < users.length);
    }, [users, limit]);

    const loadMore = () => {
        if (limit >= 100) {
            setHasMore(false);
        } else {
            setLimit(limit + 10);
        }
    };

    return (
        <div className='div-3'>
            <div className='div-4'>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <select value={filter} className="select select-primary w-full max-w-xs" onChange={(e) => setFilter(e.target.value)}>
                    <option value="" disabled defaultValue>category</option>
                    <option value="">все</option>
                    <option value="category?category=не популярен">не популярен</option>
                    <option value="category?category=известный">известный</option>
                    <option value="category?category=средний">средний</option>
                </select>
            </div>
            <div className='div-2'>
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((item) => (
                        <NavLink to={`/toliq/${item.id}`} key={item.id}>
                            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-96 mt-24">
                                <img src={item.image} alt="img" className="absolute inset-0 h-full w-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                <h3 className="z-10 mt-3 text-3xl font-bold text-white">{item.name}</h3>
                                <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
                            </article>
                        </NavLink>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            {hasMore && <button onClick={loadMore} className='button'>Yanada koproq</button>}
        </div>
    );
}

export default Card;
