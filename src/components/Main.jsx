import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="main__inner">
          <div className="main__titles">
            <h1 className="main__title">
              Зарабатывайте больше <br />
              <span className="main__title gradient-bold"> с WELBEX</span>
            </h1>
            <p className="main__description">Развиваем и контролируем продажи за вас</p>
          </div>
          <div className="main__info">
            <h3 className="main__info-title">
              Вместе с <span className="gradient-default">бесплатной консультацией</span> мы дарим:
            </h3>
            <div className="main__info-wrapper">
              <div className="main__info-box">
                <h5 className="main__box-title">Виджеты</h5>
                <p className="main__box-text">30 готовых решений</p>
              </div>
              <div className="main__info-box">
                <h5 className="main__box-title">Dashboard</h5>
                <p className="main__box-text">с показателями вашего бизнеса</p>
              </div>
              <div className="main__info-box">
                <h5 className="main__box-title">Skype Аудит</h5>
                <p className="main__box-text">отдела продаж и CRM системы</p>
              </div>
              <div className="main__info-box">
                <h5 className="main__box-title">35 дней</h5>
                <p className="main__box-text">использования CRM</p>
              </div>
            </div>
            <Link className="main__btn" to="/">
              Получить консультацию
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main
