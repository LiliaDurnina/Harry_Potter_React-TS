import Header from "../components/Header/Header";
import HousesGrid from "../components/Houses/HousesGrid";

const HousesPage = () => {
    return (
        <div className="wrapper">
            {/* Верхнее меню */}
            <Header />

            <div className="character__body">
                <section className="section1">
                    <h2 id="section1__title">Houses</h2>

                    <div id="houses-container">
                        <HousesGrid />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HousesPage;