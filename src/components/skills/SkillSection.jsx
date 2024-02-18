import { SkillCard } from './SkillCard'

export const SkillSection = ({ title, skills }) => {
  return (
    <section className=" space-y-10">
      <h1 className=" text-primary font-bold text-3xl text-center tracking-wide">{title}</h1>
      <div className=" flex justify-start flex-wrap">
        {skills.map((skill) => (
          <SkillCard key={skill.id} title={skill.title} image={skill.logo} link={skill.link} />
        ))}
      </div>
    </section>
  )
}
