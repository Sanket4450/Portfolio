import { SkillSection } from './SkillSection'
import { languages, frontendSkills, backendSkills, tools } from '../../data/skills'

export const AllSkills = () => {
  return (
    <section className=" space-y-20">
      <SkillSection title="Programming Languages" skills={languages} />
      <SkillSection title="Front-end Skills" skills={frontendSkills} />
      <SkillSection title="Back-end Skills" skills={backendSkills} />
      <SkillSection title="Other Tools" skills={tools} />
    </section>
  )
}
