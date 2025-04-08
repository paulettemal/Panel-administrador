interface UserInfo {
    profileImage: string;
    name: string;
}

export interface Usuario {
    id: number;
    user: UserInfo;
    status: string;
    phoneNumber: string;
    position: string;
    department: string;
    activity: string;
}