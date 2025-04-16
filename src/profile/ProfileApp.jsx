import { ProfileContext } from "./ProfileContext.jsx"
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { useState } from "react";
import ProfileForm from "./ProfileForm.jsx";

export default function ProfileApp() {
    const [name, setName] = useState("Hanif");

    return (
        <>
            {/* paramtere hanif akan terkirim ke 
        profile dan profile address krn kedua komponen 
        tersebut menggunakan context, context tersebut dibuat di profile context,
        yang mana profile context digfunakan di profile dan profile address 
         */}
            <ProfileContext.Provider value={name}>
                <h1>Profile App</h1>
                <ProfileForm name={name} setName={setName} />
                <Profile />
                <ProfileAddress />
            </ProfileContext.Provider >
        </>
    )
}