import axios from "axios"

export default {

    async getStudent() {
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

    async updateStudent(id, data) {
        try {
            const student = await axios.patch(
                ` https://unversidad-back.herokuapp.com/students/updateStudent/${id}/`,
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("access")}`,
                    },
                }
            );

            alert("Cuenta Actualizada")
            return student.data
        } catch (error) {
            alert(JSON.stringify(error.response.data));
            console.log(error.response.data);
        }
    }
};
