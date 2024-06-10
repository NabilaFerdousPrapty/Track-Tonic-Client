import React, { useState, useEffect } from 'react';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';

const Subscriber = () => {
    const [subscribers, setSubscribers] = useState([]);
    const axiosSecure = UseAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/newsletter')
            .then(res => {
                setSubscribers(res.data);
            })
            .catch(err => {
                console.error("Error fetching subscribers:", err);
            });
    }, [axiosSecure]);

    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3">Index</th>
                               
                                <th className="p-3">
                                    Role
                                </th>
                                
                                <th className="p-3">
                                    Email
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {subscribers.map((subscriber, index) => (
                                <tr key={index} className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                                    <td className="p-3">
                                        <p>{index + 1}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{subscriber.role}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{subscriber.email}</p>
                                        
                                    </td>
                                    
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Subscriber;
