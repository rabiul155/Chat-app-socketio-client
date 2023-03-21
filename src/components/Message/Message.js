import React from 'react';

const Message = ({ own, msg }) => {

    return (
        <div>
            <div className={`flex my-3 ${own ? ' justify-end' : 'flex-col'}`}>
                <div>

                    {
                        !own && <p className=' font-[500] text-[13px] relative left-14'>Mikel Bey</p>
                    }

                    <div className=' flex'>
                        {
                            !own &&
                            <img className=' h-9 w-9 rounded-full mr-3' src="https://i.ibb.co/bH9fpcR/photo-1633332755192-727a05c4013d.jpg" alt="" />

                        }

                        <p className={`px-4 py-1 max-w-[250px] lg:max-w-xs rounded-[18px] ${own ? 'bg-slate-200 text-black' : 'bg-blue-700 text-white'} `}>{msg}</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Message;