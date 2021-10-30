import axios from "axios"

export default {

    async getMyCourses(){
        try {
            const courses = await axios.get(
                ` https://unversidad-back.herokuapp.com/courses/my-courses/`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("access")}`,
                    },
                }
            );
            return courses.data
        } catch (error) {
            console.log(error);
        }
    },
};
