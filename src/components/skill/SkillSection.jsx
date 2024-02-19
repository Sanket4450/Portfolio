import { SkillCard } from './SkillCard'

export const SkillSection = ({ title, skills }) => {
  return (
    <section>
      <h1 className=" text-primary font-bold text-3xl text-center tracking-wide py-4">{title}</h1>
      <div className=" flex max-tab:justify-center justify-start flex-wrap">
        {skills.map((skill) => (
          <SkillCard key={skill.id} title={skill.title} image={skill.logo} link={skill.link} />
        ))}
      </div>
    </section>
  )
}
