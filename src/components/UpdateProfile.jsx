import { useState, useEffect } from 'react';
import { getUserInfo, updateProfile } from '../services/UserService'
import { useParams } from 'react-router-dom';

const UpdateProfile = () => {
    
    const [user, setUser] = useState({});
    const [file, setFile] = useState(null);
    const { currentId } = useParams();

    useEffect(() => {
        catchUserInfo();
    }, []);

    function catchUserInfo() {
        getUserInfo(currentId).then((response) => {
            setUser(response.data)
        }).catch(error => {
            console.error(error);
        })
    }

    const handleInputChange = (e) => {
        const { userName, value } = e.target;
        setUser({ ...user, [userName]: value });
    };
    
    const handleFileChange = (e) => {
        setFile(e.target.files[0]); // Update state with the selected file
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        const formData = new FormData();
        formData.append('data', JSON.stringify(user));
        if (file) {
            formData.append('file', new Blob([JSON.stringify(file)], {type : 'application/json'})); // Append the file to the form data
        }

        updateProfile(currentId, formData).then((response) => {
            console.log(formData);
            setUser(response.data);
        }).catch(error => {
            console.error(error);
        });
    };

    const ImageSrc = () => {
        if(user.profileImage){
            return user.profileImage
        } else{
            return 'defaultProfile.png'
        }
    }

    return (
        <div className="update-profile">
            <h2>Update Profile</h2>
            <div className="user-id">
                <label htmlFor="userName">Userid </label>
                {user.userId}
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userName">Username</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={user.userName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="profileImage">Profile Image</label>
                    <input
                        type="file"
                        id="profileImage"
                        name="profileImage"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                    <div>
                        <img
                            src={ImageSrc()}
                            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                        />
                    </div>
                </div>
                <button type="submit" className="update-button">Update Profile</button>
            </form>
        </div>
    );
};

export default UpdateProfile;
