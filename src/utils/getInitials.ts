export function getInitials(fullName :string) {
        return `${fullName.split(' ')[0][0]}${fullName.split('')[1][0]}`
    }
