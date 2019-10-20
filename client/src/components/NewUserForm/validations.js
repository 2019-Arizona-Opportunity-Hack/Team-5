import * as yup from "yup";

export default yup.object().shape({
    first: yup.string().required(),
});
