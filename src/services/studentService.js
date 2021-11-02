import axios from "axios"

export default {

    async getStudent(id) {
        try {
            const student = await axios.get(
                ` https://unversidad-back.herokuapp.com/students/getMyInfo/`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("access")}`,
                    },
                }
            );
            return student.data
        } catch (error) {
            console.log(error);
        }
    },
};
