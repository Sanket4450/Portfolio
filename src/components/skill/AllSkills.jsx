import { SkillSection } from './SkillSection'
import { languages, frontendSkills, backendSkills, tools } from '../../data/skills'

export const AllSkills = () => {
  return (
    <section className=" space-y-10 py-12">
      <SkillSection title="Programming Languages" skills={languages} />
      <SkillSection title="Front-end" skills={frontendSkills} />
      <SkillSection title="Back-end" skills={backendSkills} />
      <SkillSection title="Tools" skills={tools} />
    </section>
  )
}
