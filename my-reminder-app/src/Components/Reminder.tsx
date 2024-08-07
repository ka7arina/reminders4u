import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reminder: React.FC = () => {
    const [reminder, setReminder] = useState<string>('');
    const [reminders, setReminders] = useState<string[]>([]);

    const handleAddReminder = () => {
        setReminders([...reminders, reminder]);
        setReminder('');
        toast(`Reminder added: ${reminder}`);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            reminders.forEach(reminder => {
                toast(`Reminder: ${reminder}`);
            });
        }, 300000); // 300000ms = 5 minutes

        return () => clearInterval(interval);
    }, [reminders]);

    return (
        <div>
            <h1>Reminder App</h1>
            <input 
                type="text" 
                value={reminder} 
                onChange={(e) => setReminder(e.target.value)} 
                placeholder="Enter reminder"
            />
            <button onClick={handleAddReminder}>Add Reminder</button>
            <ToastContainer />
        </div>
    );
};

export default Reminder;
