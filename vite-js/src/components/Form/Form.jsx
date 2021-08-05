import React, {useEffect, useState} from "react";

export const Form = ({setFormValues}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [country, setCountry] = useState("Russia");
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState({});

    useEffect(() => {
        validate()
    }, [agree, firstName, lastName, birthDate]);

    const reset = () => {
        setFirstName("");
        setLastName("");
        setBirthDate("");
        setCountry("Russia");
        setAgree(false);
        setError({});
    }

    const validate = () => {
        setError({});
        if(!agree) {
            setError((state) => ({...state, agree}))
        }
        if(firstName === "") {
            setError((state) => ({...state, firstName}))
        }
        if(lastName === "") {
            setError((state) => ({...state, lastName}))
        }
        if(birthDate === "") {
            setError((state) => ({...state, birthDate}))
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if( Object.keys(error).length === 0) {
            setFormValues((state) => [...state, {firstName, lastName, birthDate, country, agree}]);
            reset();
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label className="item" htmlFor={firstName}>
                <p>Name:{error?.firstName !== undefined && <span className="errors">Should be fill</span>}</p>
                <input
                    type="text"
                    name={firstName}
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}/>
            </label>
            <label className="item" htmlFor={lastName}>
                <p>Surname:{error?.lastName !== undefined && <span className="errors">Should be fill</span>}</p>
                <input
                    type="text"
                    name={lastName}
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)} />
            </label>
            <label className="item" htmlFor={birthDate}>
                <p>Birth date:{error?.birthDate !== undefined && <span className="errors">Should be fill</span>}</p>
                <input
                    type="date"
                    name={birthDate}
                    value={birthDate}
                    onChange={(event) => setBirthDate(event.target.value)} />
            </label>
            <label className="country" htmlFor={country}>
                Country:
                <select
                    className="country"
                    name="country"
                    value={country}
                    onChange={(event) => setCountry(event.target.value)}>
                    <option>Russia</option>
                    <option>Belarus</option>
                    <option>Ukraine</option>
                </select>
            </label>
            <label className="agree" htmlFor="agree">
                <p>Agree: {error?.agree !== undefined && <span className="errors">Should be check</span>}</p>
                <input type="checkbox"
                       name="agree"
                       checked={agree}
                       onChange={() => setAgree(prev => !prev)} />
            </label>
            <div className="button">
                <input type="submit" value="Send" />
            </div>
        </form>
    )
}
