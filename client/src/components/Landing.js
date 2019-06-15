import React from 'react';
import UserForm from './UserForm';


const Landing=()=>{
    return (

            <div className="ui grid">
                <div className="six wide column">
                    <UserForm />
                </div>
                <div className="ten wide column">
                    <h2>How BookAway works for Users.</h2>
                    <p>BookAway users typically are interested in cultural exchange and learning 
                    and will help out for a few hours a day in exchange for food and accommodation, 
                    with visits lasting anywhere from a few days to a few months.</p>
                    <p>Travel cheaply and stay for free, whilst making a difference to the communities you visit. 
                    Put your existing skills to good use, or try something new you‘d never normally get to do and pick up new skills along the way.</p>
                    <p>There is an ever growing list of active hosts in over 180 countries offering all kinds of places to stay.</p>
                    <h2>How BookAway works for Hosts.</h2>
                    <p>Whether you are interested in cultural exchange and learning, need help within a family environment, a specific project,
                     or another pair of hands on an ongoing basis, if you have extra space and are interested in meeting new people from all over 
                     the world then why not invite people to come and help via Workaway?
                    </p>
                    <p>Workawayers come from all sorts of backgrounds and bring with them a variety of abilities and skills. 
                    Typical exchanges might involve helping with an eco-building project, language learning and practice, 
                    child-minding, helping in the garden, helping with animals, web design and promotion, the list is endless. 
                    Hosts asking for help with business activities can also offer paid positions.</p>
                </div>
            </div>
           
        
        
    )
}

export default Landing;