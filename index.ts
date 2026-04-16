import * as aws from "@pulumi/aws";

const bucket = new aws.s3.Bucket("s3-bucket-pulumi", {
  bucket: 'marksoulz-s3-bucket-pulumi',
  tags: {
    IAC: "true",
  },
});

const ecr = new aws.ecr.Repository("ecr-pulumi", {
  name: "ecr-pulumi",
  imageTagMutability: "IMMUTABLE",
  tags: {
    IAC: "true"
  }
})

export const bucketName = bucket.id;
export const bucketRegion = bucket.region;
export const bucketArn = bucket.arn;

export const ecrName = ecr.name;
export const ecrRepoURL = ecr.repositoryUrl;
