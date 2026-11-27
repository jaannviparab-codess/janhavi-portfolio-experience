import Reveal from '../components/Reveal'
import { achievements } from '../data/profile'
import { AwardIcon } from '../components/icons'
import './Credentials.css'

export default function Achievements() {
  return (
    // Spans the full width of the parent .credentials__grid
    <div id="achievements" className="achievements">
      <h3 className="achievements__label">Academic achievements</h3>
      <ul className="achievements__grid">
        {achievements.map((achievement, index) => (
          <Reveal
            as="li"
            key={achievement.id}
            delay={index * 80}
            className="achievement-card card card--interactive"
          >
            <span className="credential-card__icon">
              <AwardIcon size={22} />
            </span>
            <p className="achievement-card__value">{achievement.value}</p>
            <h4 className="achievement-card__label">{achievement.label}</h4>
            {achievement.detail && (
              <p className="achievement-card__detail">{achievement.detail}</p>
            )}
          </Reveal>
        ))}
      </ul>
    </div>
  )
}
