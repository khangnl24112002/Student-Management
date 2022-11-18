import "./App.css";
import "./styles/app.sass";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./components/Page";
import StudentList from "./components/StudentList";
import StudentAdmission from "./components/NewProduct";
import Grades from "./components/Grades";
// import Edit from "./components/Edit";
import Edit from "./components/Grades/Edit";
import Subject from "./components/Subject";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import StudentDetail from "./components/StudentList/Edit";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Page title="Dashboard"></Page>} />
                <Route
                    path="/students/add"
                    element={
                        <Page title="Student Addmission">
                            <StudentAdmission />
                        </Page>
                    }
                />
                <Route
                    path="/students/list"
                    element={
                        <Page title="Student List">
                            <StudentList />
                        </Page>
                    }
                />
                <Route
                    path="/grades/:gradeId"
                    element={
                        <Page title="Grades Detail">
                            <Grades />
                        </Page>
                    }
                />
                <Route
                    path="/edit/grades/:id"
                    element={
                        <Page title="Change class">
                            <Edit />
                        </Page>
                    }
                />
                <Route
                    path="/student-detail/:id"
                    element={
                        <Page title="Student Detail">
                            <StudentDetail />
                        </Page>
                    }
                />
                <Route
                    path="/subject/:subjectName"
                    element={
                        <Page title="Subject">
                            <Subject />
                        </Page>
                    }
                />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;
