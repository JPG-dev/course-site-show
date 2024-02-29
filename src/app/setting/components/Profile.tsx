import React from 'react'

const Profile = () => {
    return (
        <form className="ui form width-sm-4 width-2 margin-center text-left mx-auto w-full sm:w-90 md:w-50">
            <div className="field upload_field mb-5 text-center">
                <label className="margin-center">
                    <img src="https://lh3.googleusercontent.com/a/ACg8ocLa6KafS6NHjyuKdSG1sPWdx4V4Xv4BtKR840CMX4h2aXk=s96-c" width="120" height="120" alt="" className="object-fit-cover cursor-pointer rounded-full mx-auto" />
                    <span className="ui basic primary button cursor-pointer inline-block text-center p-2 md:p-3 my-3 font-bold rounded-md">Replace profile image</span>
                    <input type="file" className="hidden" id="profile_picture" accept="image/*" />
                </label>
            </div>

            <div className="text-left mb-5">
                <label>NAME</label>
                <div className="ui input">
                    <input className='w-full p-2' placeholder="Input your name" name="name" id="name" type="text" /></div>
            </div>
            <div className="text-left mb-5">
                <label>BIO</label>
                <div className="ui input">
                    <input className='w-full p-2' placeholder="Input your bio" name="bio" id="bio" type="text" />
                </div>
            </div>
            <div className="text-left mb-5">
                <label>INTERESTS</label>
                <div className="ui input">
                    <input className='w-full p-2' placeholder="Interests (separate by ,)" name="interests" id="interests" type="text" />
                </div>
            </div>
            <div className="text-left mb-5">
                <label>EMAIL</label>
                <div className="ui input">
                    <input className='w-full p-2' placeholder="Input your email" name="email" id="email" type="text" />
                </div>
            </div>
            <div className="text-left mb-5">
                <label>LINKEDIN</label>
                <div className="ui input">
                    <input className='w-full p-2' placeholder="Input your LinkedIn" name="linkedin" id="linkedin" type="text" />
                </div>
            </div>
            <div className="field">
                <div className="field">
                    <div className="custom_phone_input_container react-tel-input ">
                        <div className="special-label">Phone</div>
                        <input className="w-full p-2 form-control custom_phone_input_container_input" placeholder="Input your phone" type="tel" />
                        <div className="flag-dropdown ">
                            <div className="selected-flag" title="Singapore: + 65" role="button" aria-haspopup="listbox">
                                <div className="flag sg">
                                    <div className="arrow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="field">
                <button className="ui button w-full mt-10 p-2 hover:opacity-80" type="submit">Save</button>
            </div>
        </form>
    )
}

export default Profile