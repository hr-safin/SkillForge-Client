import React from 'react';
import useCourse from '../../../Hook/useCourse';

const Course = () => {

    const [course] = useCourse()
    console.log(course)
    return (
        <div>
            
        </div>
    );
};

export default Course;