import { Index, Title, TitleWrapper, Bold, SubText, Wrapper } from './styles'

const ExperienceCard = ({
  id,
  yearFrom,
  yearTo,
  school,
  company,
  skills,
  dateFrom,
  dateTo,
  role,
  description
}) => {
  const startDate = yearFrom || dateFrom
  const endDate = yearTo || dateTo
  const index = String(id).padStart(2, '0')
  const heading = school || role
  return (
    <Wrapper>
      <Index>{index}</Index>

      <TitleWrapper>
        <Title>
          <Bold>{heading}</Bold> {company && `at ${company}`}
        </Title>
        <SubText>
          {`${startDate} to ${endDate}`}
        </SubText>
      </TitleWrapper>
      <SubText>
        {description || ''}
        <ul>{skills && skills.map(skill => <li>{skill}</li>)}</ul>
      </SubText>
    </Wrapper>
  )
}

export default ExperienceCard
