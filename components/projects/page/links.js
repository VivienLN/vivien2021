import projectsDataHelpers from '../../../helpers/projects-data-helpers'

export default function Links(props) {
    console.log(projectsDataHelpers.getPreviousBySlug(props.slug))
    console.log(projectsDataHelpers.getNextBySlug(props.slug))

    return <div />
}