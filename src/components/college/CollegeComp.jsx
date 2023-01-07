import "./college.css";
const CollegeComp = () => {
    return (
        <>
            <div className="clg-container" id="AbtClg">
                <div className="clg-content">
                    <h1>About Maharaja Surajmal Institute</h1>
                    <p>
                        Maharaja Surajmal Institute was established in year 1999 with aim to propagate quality professional education to young generation by adopting innovative and creative methodology. The Institute has been established by dedicated and selfless endeavours of educationists and social workers who are deeply concerned with the standards of education and are deeply concerned with the standards of education and are determined to upgrade the quality, content and direction of education. Under guidance of Hon’ble president Shri Kaptan Singh, the institute aims to reach new heights in field of higher education.
                    </p>
                    <p>
                        One of the most preferred institutes by the students in GGSIPU, the Institute boasts of a sprawling lush green campus of 8 acres, well equipped library, qualified and experienced staff, state of art infrastructure and robust teaching pedagogy. With highly sought after courses like BBA, B.Com, BCA and B.Ed, the Institute aims to empower minds that are able to conceive creative ideas and identify innovative solutions to the problems. In terms of placement, MSI boasts of not only a steady stream of campus recruiters but we have also assurances for future tie-ups and recruitment opportunities for our students. In the year 2018, 573 campus placements and in the year 2017, 385 under-graduate BBA and BCA students have been placed in reputed organizations. To ensure that our students get placed well in big organizations, placement team and faculty members organize various pre-placement activities like Group discussions, Mock interviews etc.
                    </p>
                    <p>
                        Visit the official website <a href="https://www.msijanakpuri.com/" target="_blank">by clicking here. </a>
                    </p>
                </div>

                <div className="clg-img-container">
                    {<img src="https://www.msijanakpuri.com/wp-content/uploads/2020/02/PicCollageMaker_2020131920306.jpg"></img>}
                </div>
            </div>
        </>
    )
}
export default CollegeComp;