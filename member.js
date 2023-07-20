function skillsMember()
{
    var skills = ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'];
    var member = {
        name: 'John',
        age: 30,
        skills: skills,
        showSkills: function() {
            var str = '';
            for (var i = 0; i < this.skills.length; i++) {
                str += this.skills[i] + ' ';
            }
            return str;
        }
    };
    return member;
}