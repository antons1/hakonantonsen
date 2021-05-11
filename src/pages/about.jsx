import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function about() {
    return (
        <Layout>
            <SEO
                title="About Håkon Antonsen"
                description={` I am Håkon Antonsen, a software developer living in Oslo, Norway. If you want to reach me professionaly,
                feel free to contact me on LinkedIn. I have a master's degree in computer science from the University of Oslo
                and have worked as a full-stack developer for 6 years, with a strong frontend focus the last few 
                years.`}
                type="profile"
                image="./ProfilGit.jpg">
                <meta name="profile:first_name" content="Håkon" />
                <meta name="profile:last_name" content="Antonsen" />
            </SEO>
            <div className="my-8 bg-white rounded-md shadow-lg box-content p-4">
                <div className="max-w-3xl m-auto mt-0">
                    <h1 className="text-xl">Hello! 👋</h1>
                    <div>
                        <img className="w-48 float-right ml-4 mb-4" src="./ProfilGit.jpg" />
                        <p>
                            I am Håkon Antonsen, a software developer living in Oslo, Norway. If you want to reach me professionaly,
                            feel free to contact me on LinkedIn. I have a master's degree in computer science from the University of Oslo
                            and have worked as a full-stack developer for 6 years, with a strong frontend focus the last few 
                            years. <strong>I am not currently looking for new work.</strong>
                        </p>
                        <p>
                            This site is a place where I write about whatever I think about, so the content will vary. I try to show 
                            some photos and other creative work I do, as well as software and technology, and, as I said, whatever I 
                            think about.
                        </p>
                        <p>
                            If you want to reach me for anything else than work inquiries, feel free to contact me on haakon (at) antons1 (dot) net. 
                            You can also try to reach me on one of the links in the footer, but I am not that good at checking them that often...
                        </p>
                        <p>
                            Oh! And please listen to our <a target="blank" className="underline hover:no-underline" href="https://open.spotify.com/show/0YK5ZNi0lLjRNAlSsJXiFR?si=2baZlL76Rt-abYeUgcjKwg">podcast from Telia</a> that I co-host!
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}