import '../styles/Cv.css'
import NewCv from './NewCv';

const Cv = () => {
    return (
        <div>
            <form>
                <label>Full Name</label>
                <input type="text" name="text" />
                <label>Email</label>
                <input type="email" name="email" />
                <label>Phone Number</label>
                <input type="email" name="email" />
        </form>
        <NewCv />
        </div>
);
}
export default Cv;