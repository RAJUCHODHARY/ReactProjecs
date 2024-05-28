import React, { useState } from 'react';

function DomainNameSearch() {
    const [email, setEmail] = useState('');
    const [domainName, setDomainName] = useState('');

   

    const handleSubmit = (e) => {
        e.preventDefault()
        const emailDomain = email.split('@')[1];
        const domainName = emailDomain.split('.')[0];
        setDomainName(domainName);
        setEmail("");
    };

    return (
        <div style={{marginTop:"20px"}}>
            <input
                type="email"
                placeholder="enter your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <br />
            <h1>Domain name search</h1>
            <input
                type="text"
                placeholder="output"
                value={domainName}
                readOnly // to prevent manual editing
            />
            <br />
            <button onClick={handleSubmit}>submit</button>
        </div>
    );
}

export default DomainNameSearch;
