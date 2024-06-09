import React from 'react';
import useAuth from '../../../hooks/UseAuth';

const ProfilePage = () => {
    const {user}=useAuth();
    return (
        <div>
            {
                user && <h1>
                    Welcome {user.displayName}
                </h1>
            }
        </div>
    );
};

export default ProfilePage;