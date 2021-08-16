import projectsData from '../resources/projects'

export default {
    getActive: function() {
        return projectsData.filter(item => item.active)
    },
    getBySlug: function(slug) {
        return this.getActive().find(item => item.slug == slug)
    },
    getIndexBySlug: function(slug) {
        return this.getActive().findIndex(item => item.slug == slug)
    },
    getPreviousBySlug: function(slug) {
        let index = this.getIndexBySlug(slug)
        let activeProjects = this.getActive()
        let targetIndex = index == 0 ? (activeProjects.length - 1) : (index - 1)
        return activeProjects[targetIndex]
    },
    getNextBySlug: function(slug) {
        let index = this.getIndexBySlug(slug)
        let activeProjects = this.getActive()
        let targetIndex = index == activeProjects.length - 1 ? 0 : (index + 1)
        return activeProjects[targetIndex]
    }
}